# OpenApiIssueListDataWithPage

分页查询事项

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**List** | [**Array&lt;IssueListData&gt;**](IssueListData.md) | 所有事项数据 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页的大小 | [optional] [default to undefined]
**TotalCount** | **number** | 所有行数 | [optional] [default to undefined]
**TotalPage** | **number** | 全部页 | [optional] [default to undefined]

## Example

```typescript
import { OpenApiIssueListDataWithPage } from './api';

const instance: OpenApiIssueListDataWithPage = {
    List,
    PageNumber,
    PageSize,
    TotalCount,
    TotalPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
