import { useEffect } from 'react'

import { apiClient } from '~/lib/request'
import { queryClient } from '~/providers/root/react-query-provider'

export const useAckReadCount = (type: 'post' | 'note', id: string) => {
  useEffect(() => {
    queryClient.fetchQuery({
      queryKey: ['ack-read-count', type, id],
      queryFn: async () => apiClient.ack.read(type, id),
    })
  }, [])
}
