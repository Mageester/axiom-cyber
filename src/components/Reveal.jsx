import useInView from '../hooks/useInView';

export default function Reveal({ children, className = '' }) {
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
