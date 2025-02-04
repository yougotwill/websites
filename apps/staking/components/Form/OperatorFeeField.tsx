import { useDecimalDelimiter } from '@/lib/locale-client';
import type { InputDataTestId } from '@/testing/data-test-ids';
import { FormControl, FormItem, FormMessage } from '@session/ui/ui/form';
import { Input } from '@session/ui/ui/input';
import { z } from 'zod';

export type GetOperatorFeeFormFieldSchemaArgs = {
  minOperatorFee: number;
  maxOperatorFee: number;
  incorrectFormatMessage: string;
  underMinOperatorFeeMessage: string;
  overMaxOperatorFeeMessage: string;
};

export const getOperatorFeeFormFieldSchema = ({
  minOperatorFee,
  maxOperatorFee,
  incorrectFormatMessage,
  underMinOperatorFeeMessage,
  overMaxOperatorFeeMessage,
}: GetOperatorFeeFormFieldSchemaArgs) => {
  return z
    .string()
    .regex(/^[0-9]*[.,]?[0-9]*$/, { message: incorrectFormatMessage })
    .refine(
      (v) => {
        const n = Number.parseFloat(v);
        return !isNaN(n) && n >= minOperatorFee;
      },
      { message: underMinOperatorFeeMessage }
    )
    .refine(
      (v) => {
        const n = Number.parseFloat(v);
        return !isNaN(n) && n <= maxOperatorFee;
      },
      { message: overMaxOperatorFeeMessage }
    );
};

export type OperatorFeeFieldProps = {
  dataTestId: InputDataTestId;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- This is fine for now TODO: resolve properly
  field: any;
  maxFee: number;
  // TODO: investigate adding a min fee if needed
  minFee: number;
  placeholder: string;
};

export default function OperatorFeeField({
  dataTestId,
  disabled,
  field,
  maxFee,
  placeholder,
}: OperatorFeeFieldProps) {
  const decimalDelimiter = useDecimalDelimiter();
  const thousandsSeparator = decimalDelimiter === '.' ? ',' : '.';
  const formatInputText = (value: string) => {
    if (value === '0') return '0';
    // Remove non-numeric characters and non-decimal delimiters
    let formattedValue = value.replace(/[^0-9.,]/g, '');

    // Remove thousands separators
    if (formattedValue.includes(thousandsSeparator)) {
      formattedValue = formattedValue.replaceAll(thousandsSeparator, '');
    }

    // Remove any leading zeroes except when its `0.`
    if (formattedValue.startsWith('0') && !formattedValue.startsWith('0.')) {
      formattedValue = formattedValue.replace(/^0+/, '');
    }

    // Remove all but the first decimal delimiter
    if (formattedValue.includes(decimalDelimiter)) {
      const [first, ...rest] = formattedValue.split(decimalDelimiter);

      const decimalValue = rest.join('').slice(0, 2);
      formattedValue = `${first}${decimalDelimiter}${decimalValue}`;
      // If the value is greater than the full stake, return the full stake
    }

    if (Number.parseFloat(formattedValue) > maxFee) {
      return maxFee.toString();
    }

    return formattedValue;
  };

  return (
    <FormItem className="-my-1 flex flex-col">
      <div className="flex flex-row items-center gap-1 align-middle">
        <FormControl>
          <Input
            placeholder={placeholder}
            disabled={disabled}
            className="w-full rounded-lg border-[2px] border-[#668C83] border-opacity-80 px-4 py-8 text-3xl shadow-md"
            {...field}
            value={field.value ?? ''}
            data-testid={dataTestId}
            onChange={(e) => field.onChange(formatInputText(e.target.value))}
            onPaste={(e) => {
              e.preventDefault();
              e.stopPropagation();
              return field.onChange(formatInputText(e.clipboardData.getData('text/plain')));
            }}
          />
        </FormControl>
        <span className="mx-2 text-5xl font-light">%</span>
      </div>
      <FormMessage />
    </FormItem>
  );
}
