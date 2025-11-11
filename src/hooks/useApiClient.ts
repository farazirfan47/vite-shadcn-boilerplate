// src/hooks/useApiClient.ts



import { useState } from 'react';

const PROXY_BASE_URL = 'https://costar-backend-production.up.railway.app';

interface ApiResponse<T = unknown> {

  success: boolean;

  data?: T;

  error?: string;

  vendor_code: string;

  cached: boolean;

}

export function useApiClient() {

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const call = async <T = unknown>(

    vendorCode: string,

    params: Record<string, unknown> = {}

  ): Promise<T> => {

    setLoading(true);

    setError(null);

    try {

      const response = await fetch(`${PROXY_BASE_URL}/api/proxy`, {

        method: 'POST',

        headers: { 'Content-Type': 'application/json' },

        body: JSON.stringify({

          vendor_code: vendorCode,

          params,

        }),

      });

      const result: ApiResponse<T> = await response.json();

      if (!result.success) {

        throw new Error(result.error || 'API call failed');

      }

      return result.data as T;

    } catch (err) {

      const errorMsg = err instanceof Error ? err.message : 'Unknown error';

      setError(errorMsg);

      throw err;

    } finally {

      setLoading(false);

    }

  };

  return { call, loading, error };

}

