import { VideoWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  video?: VideoWidget;
  cta1Text?: string;
  cta1Link?: string;
  cta2Text?: string;
  cta2Link?: string;
  cta3Text?: string;
  cta3Link?: string;
}

export default function VideoSection({
  title = "Watch Our Latest Video",
  video = "https://example.com/video.mp4",
  cta1Text = "Learn More",
  cta1Link = "#",
  cta2Text = "Get Started",
  cta2Link = "#",
  cta3Text = "Contact Us",
  cta3Link = "#"
}: Props) {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{title}</h2>
      <div className="aspect-w-16 aspect-h-9 mb-8">
        <video
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src={video}
          controls
        ></video>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a href={cta1Link} className="btn btn-primary w-full md:w-auto">{cta1Text}</a>
        <a href={cta2Link} className="btn btn-secondary w-full md:w-auto">{cta2Text}</a>
        <a href={cta3Link} className="btn btn-accent w-full md:w-auto">{cta3Text}</a>
      </div>
    </section>
  );
}