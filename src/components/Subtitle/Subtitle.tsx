import './Subtitle.scss';

interface SubtitleProps {
  children: string;
}

export default function Subtitle({ children }: SubtitleProps) {
  return <h2 className="subtitle">{children}</h2>;
}
