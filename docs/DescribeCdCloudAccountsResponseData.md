# DescribeCdCloudAccountsResponseData

DescribeCdCloudAccountsResponseData 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudAccounts** | [**Array&lt;CloudAccount&gt;**](CloudAccount.md) | 云账号列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **string** | 每页条数 | [optional] [default to '']
**TotalPage** | **string** | 总共页数 | [optional] [default to '']
**TotalRow** | **string** |  总共条数 | [optional] [default to '']

## Example

```typescript
import { DescribeCdCloudAccountsResponseData } from './api';

const instance: DescribeCdCloudAccountsResponseData = {
    CloudAccounts,
    PageNumber,
    PageSize,
    TotalPage,
    TotalRow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
