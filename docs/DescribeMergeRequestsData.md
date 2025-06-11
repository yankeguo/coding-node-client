# DescribeMergeRequestsData

获取合并请求数据

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**List** | [**Array&lt;MergeRequestData&gt;**](MergeRequestData.md) | 合并请求列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页数 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**TotalPage** | **number** | 总页数 | [optional] [default to undefined]
**TotalRow** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { DescribeMergeRequestsData } from './api';

const instance: DescribeMergeRequestsData = {
    List,
    PageNumber,
    PageSize,
    TotalPage,
    TotalRow,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
