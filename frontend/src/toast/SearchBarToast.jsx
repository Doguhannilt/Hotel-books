import { useToast } from '@chakra-ui/react';


  // Toast
  const toast = useToast()


export const toast_info_search_b = () => toast({
    title: `Filtered as your request`,
    status: 'success',
    isClosable: true,})