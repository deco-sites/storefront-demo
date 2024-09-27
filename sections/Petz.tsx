import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  description?: string;
  image?: ImageWidget;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

export default function DiscountBanner({
  title = "Special Discount!",
  description = "Get 20% off on all dog products. Limited time offer!",
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
  backgroundColor = "#f0f9ff",
  textColor = "#1e3a8a",
  primaryButtonText = "Claim Discount",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "#",
  secondaryButtonLink = "#"
}: Props) {
  return (
    <div className={`bg-[${backgroundColor}] text-[${textColor}] p-6 rounded-lg shadow-lg`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={image} alt="Discount Dog" className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-6">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={primaryButtonLink} className="btn btn-primary">{primaryButtonText}</a>
            <a href={secondaryButtonLink} className="btn btn-outline">{secondaryButtonText}</a>
          </div>
        </div>
      </div>
    </div>
  );
}