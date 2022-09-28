import Spinner from '@app/components/spinner/spinner';

export interface IButton {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  className?: string;
  loading?: boolean;
}

const Button: React.FC<IButton> = ({ children, type, className, loading }) => {
  return (
    <button
      type={type}
      className={`btn btn-primary ${className}`}
      disabled={loading}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
