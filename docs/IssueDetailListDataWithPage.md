# IssueDetailListDataWithPage

分页查询版本发布范围

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**List** | [**Array&lt;IssueDetail&gt;**](IssueDetail.md) | 事项列表  | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 页数 | [optional] [default to undefined]
**TotalCount** | **number** | 总共几条事项  | [optional] [default to undefined]
**TotalPage** | **number** | 总共几页  | [optional] [default to undefined]

## Example

```typescript
import { IssueDetailListDataWithPage } from './api';

const instance: IssueDetailListDataWithPage = {
    List,
    PageNumber,
    PageSize,
    TotalCount,
    TotalPage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
