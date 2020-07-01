export const dailypack = async (
  _a: Object, _b: Object,
  { clients: { masterdata } }: Context
) => {
  return masterdata.searchDocuments({
    dataEntity: 'dailypack', fields: ['_all'], pagination: {
      page: 1,
      pageSize: 10,
    }
  })
}
