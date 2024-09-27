import { ImageWidget } from 'apps/admin/widgets.ts';

interface Props {
  /**
   * @format rich-text
   */
  title?: string;
  /**
   * @format textarea
   */
  dollarValue?: string;
  /**
   * @format textarea
   */
  conversionLabel?: string;
  /**
   * @format textarea
   */
  resultLabel?: string;
  /**
   * @format color-input
   */
  backgroundColor?: string;
  /**
   * @format color-input
   */
  textColor?: string;
  /**
   * @format color-input
   */
  buttonColor?: string;
}

export default function CurrencyConverter({
  title = "Conversor de Moedas",
  dollarValue = "valor em dólar",
  conversionLabel = "Conv. Dolar > Real",
  resultLabel = "resultado",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  buttonColor = "#4a90e2"
}: Props) {
  return (
    <div class="flex justify-center items-center min-h-screen" style={{ backgroundColor }}>
      <div class="w-80 p-6 rounded-lg shadow-lg" style={{ backgroundColor: "#f0f0f0" }}>
        <h2 class="text-2xl font-bold mb-6 text-center" style={{ color: textColor }} dangerouslySetInnerHTML={{ __html: title }}></h2>
        
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2" style={{ color: textColor }}>{dollarValue}</label>
          <input type="number" class="w-full p-2 border rounded" placeholder="Enter amount in USD" />
        </div>
        
        <div class="mb-4">
          <button class="w-full py-2 px-4 rounded text-white font-semibold" style={{ backgroundColor: buttonColor }}>{conversionLabel}</button>
        </div>
        
        <div class="mt-6">
          <label class="block text-sm font-medium mb-2" style={{ color: textColor }}>{resultLabel}</label>
          <div class="w-full p-2 bg-white border rounded">
            {/* Result will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
}