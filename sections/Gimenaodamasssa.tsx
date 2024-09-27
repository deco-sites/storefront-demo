import type { ImageWidget } from "apps/admin/widgets.ts";

interface Props {
  /**
   * @description The title of the production order
   * @format rich-text
   */
  title?: string;
  /**
   * @description The order number
   */
  orderNumber?: string;
  /**
   * @description The product description
   */
  productDescription?: string;
  /**
   * @description The quantity of pieces
   */
  quantity?: number;
  /**
   * @description The production unit
   */
  productionUnit?: string;
  /**
   * @description The production group
   */
  productionGroup?: string;
  /**
   * @description The background color of the section
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @description The text color
   * @format color-input
   */
  textColor?: string;
  /**
   * @description The logo image
   */
  logo?: ImageWidget;
}

export default function Section({
  title = "Production Order",
  orderNumber = "927020",
  productDescription = "CAMISETA MM COLORIDA ADULTO MUL",
  quantity = 556,
  productionUnit = "GIOIANESIA",
  productionGroup = "THALLES DE MENEZ",
  backgroundColor = "#f0f0f0",
  textColor = "#333333",
  logo = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e"
}: Props) {
  return (
    <div class="p-4" style={{ backgroundColor, color: textColor }}>
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">{title}</h1>
        <img src={logo} alt="Company Logo" class="w-16 h-16" />
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p><strong>Order Number:</strong> {orderNumber}</p>
          <p><strong>Product:</strong> {productDescription}</p>
        </div>
        <div>
          <p><strong>Quantity:</strong> {quantity} pieces</p>
          <p><strong>Production Unit:</strong> {productionUnit}</p>
          <p><strong>Production Group:</strong> {productionGroup}</p>
        </div>
      </div>
    </div>
  );
}