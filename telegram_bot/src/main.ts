import {Context, session, Telegraf} from "telegraf";
import {PGlite} from "@electric-sql/pglite";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {token} from "./token";

const { reply, fork } = Telegraf;

const randomPhoto = "https://picsum.photos/200/300/?random";

const sayYoMiddleware = fork(ctx => ctx.reply("yo"));

interface SessionData {
	heyCounter: number;
}

interface BotContext extends Context {
	session?: SessionData;
}

const bot = new Telegraf<BotContext>(token);

// // Register session middleware
bot.use(session());

// Register logger middleware
// @ts-expect-error ctx is not used
bot.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log("response time %sms", ms);
});

// Login widget events
bot.on("connected_website", ctx => ctx.reply("Website connected"));

// Telegram passport events
bot.on("passport_data", ctx => ctx.reply("Telegram passport connected"));

// Random location on some text messages
bot.on("text", (ctx, next) => {
	if (Math.random() > 0.2) {
		return next();
	}
	return Promise.all([
		ctx.replyWithLocation(Math.random() * 180 - 90, Math.random() * 180 - 90),
		next(),
	]);
});

// Text messages handling
bot.hears("Hey", sayYoMiddleware, ctx => {
	ctx.session ??= { heyCounter: 0 };
	ctx.session.heyCounter++;
	return ctx.replyWithMarkdown(`_Hey counter:_ ${ctx.session.heyCounter}`);
});

// Command handling
bot.command("answer", sayYoMiddleware, ctx => {
	console.log(ctx.message);
  fetch('http://localhost:6868/api/dataset', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({name: "name"}),
  });
	return ctx.replyWithMarkdownV2("*42*");
});

bot.command("cat", ctx => ctx.replyWithPhoto(randomPhoto));

// Streaming photo, in case Telegram doesn't accept direct URL
bot.command("cat2", ctx => ctx.replyWithPhoto({ url: randomPhoto }));

// Look ma, reply middleware factory
bot.command("foo", reply("http://coub.com/view/9cjmt"));

// Wow! RegEx
bot.hears(/reverse (.+)/, ctx =>
	ctx.reply(ctx.match[1].split("").reverse().join("")),
);

// Launch bot
bot.launch();

const db = new PGlite()

console.log(`db is started = ${db.dataDir}`)

// Express server setup
const app = express();
const port = 6868;

app.use(bodyParser.json());
app.use(cors());

interface RequestBody {
  name: string;
}

app.post('/api/dataset', (req, res) => {
  console.warn("hahahahahah");
  const dataset: RequestBody = req.body
  console.log(`Received dataset request: ${dataset.name}`);
  // Here you can handle the request and interact with your Telegram bot or database
  res.status(200).json({message: `Request for ${dataset.name} received`});
});

app.listen(port, () => {
 console.log(`Express server running on http://localhost:${port}`);
});


