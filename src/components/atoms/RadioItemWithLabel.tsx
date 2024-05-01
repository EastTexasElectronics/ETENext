import { RadioItemWithLabelProps } from '~/shared/types';
import { RadioGroupItem } from '~/components/ui/radio-group';
import { Label } from '~/components/ui/label';

const RadioItemWithLabel = ({ register, value, label }: RadioItemWithLabelProps) => (
  <div className="flex items-center space-x-2">
    <RadioGroupItem {...register('contactReason')} value={value} id={value.toLowerCase()} />
    <Label htmlFor={value.toLowerCase()}>{label}</Label>
  </div>
);

export default RadioItemWithLabel;
