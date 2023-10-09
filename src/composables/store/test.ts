interface TestMockInterface {
  plate: Array<any>
}

/**
 * 测试 Test Store
 */
export const useTestStore = defineStore('test-store', () => {
  /**
   * TODO: 测试 Pinia + useAsyncData + useCustomFetch
   */
  const mockApiDataset = ref<TestMockInterface>()
  const getMockApiData = async (params: any) => {
    const res = await useCustomFetch<TestMockInterface>('/test_info', {
      query: {},
      params: {}
    })
    return filterResponse(res, () => {
      mockApiDataset.value = res.data
      // 若这里报错，则可以在 useAsyncData 返回的 error 里看到错误信息
      mockApiDataset.value?.plate?.splice?.(0, 2)
    })
  }

  return {
    mockApiDataset,
    getMockApiData
  }
})
