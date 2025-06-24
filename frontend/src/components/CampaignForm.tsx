import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogBody,
    DialogCloseTrigger,
    Button,
    Input,
    NumberInput,
    Field,
    Portal,
  } from '@chakra-ui/react';
  import { useState } from 'react';
import type { NewCampaign } from '../api';
  

  
  type AddCampaignDialogProps = {
    triggerLabel?: string;
    addCampaign: (data: NewCampaign) => Promise<void>;
  };
  
  export const CampaignForm: React.FC<AddCampaignDialogProps> = ({
    triggerLabel = 'Add Campaign',
    addCampaign,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  
    const [formData, setFormData] = useState<NewCampaign>({
      name: '',
      startDate: '',
      endDate: '',
      clicks: 0,
      cost: 0,
      revenue: 0,
    });
  
    const handleChange = (key: keyof NewCampaign, value: string | number) => {
      setFormData((prev) => ({ ...prev, [key]: value }));
    };
  
    const handleSubmit = async () => {
      setIsLoading(true);

        await addCampaign(formData);
      setIsLoading(false);
      setIsOpen(false);
    };
  
    return (
      <Dialog.Root open={isOpen} >
        <DialogTrigger asChild>
          <Button onClick={() => {setIsOpen(true); setFormData({
      name: '',
      startDate: '',
      endDate: '',
      clicks: 0,
      cost: 0,
      revenue: 0,
    })}}>{triggerLabel}</Button>
        </DialogTrigger>
        <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
        <DialogContent>
          <DialogHeader>Add Campaign</DialogHeader>
          <DialogBody>
            <Field.Root mb={3}>
              <Field.Label>Name</Field.Label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
            </Field.Root>
  
            <Field.Root mb={3}>
              <Field.Label>Start Date</Field.Label>
              <Input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
              />
            </Field.Root>
  
            <Field.Root mb={3}>
              <Field.Label>End Date</Field.Label>
              <Input
                type="date"
                value={formData.endDate}
                onChange={(e) => handleChange('endDate', e.target.value)}
              />
            </Field.Root>
  
            <NumberInput.Root mb={3} value={formData.clicks.toString()} onChange={(e:any) => handleChange('clicks', e.target.value)}>
              <NumberInput.Label>Clicks</NumberInput.Label>
              <NumberInput.Input
                min={0}
              />
            </NumberInput.Root>
  
            <NumberInput.Root mb={3} value={formData.cost.toString()} onChange={(e:any) => handleChange('cost', e.target.value)}>
              <NumberInput.Label>Cost</NumberInput.Label>
              <NumberInput.Input
                min={0}
              />
            </NumberInput.Root>
  
            <NumberInput.Root mb={3} value={formData.revenue.toString()} onChange={(e:any) => handleChange('revenue', e.target.value)}>
              <NumberInput.Label>Revenue</NumberInput.Label>
              <NumberInput.Input
                min={0}
              />
            </NumberInput.Root>
         
          </DialogBody>
  
          <DialogFooter>
            
              <Button variant="outline" mr={3} onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
            <Button colorScheme="blue" onClick={handleSubmit} disabled={isLoading}>
             {isLoading ? 'Loading...' : 'Accept'}
            </Button>
          </DialogFooter>
        </DialogContent>
        </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    );
  };
  