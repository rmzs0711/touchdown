// FullWidthButton.tsx
import { Button } from '@telegram-apps/telegram-ui';
import '../App.css';

// @ts-ignore
const FullWidthButton = ({ children, ...props }) => {
  return (
    <Button size="l" className="full-width-button" {...props}>
      {children}
    </Button>
  );
}

export default FullWidthButton;