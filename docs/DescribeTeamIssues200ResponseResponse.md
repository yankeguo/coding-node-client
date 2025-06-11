# DescribeTeamIssues200ResponseResponse

公共返回体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Issues** | [**Array&lt;IssueListData&gt;**](IssueListData.md) | 事项列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 分页的大小 | [optional] [default to undefined]
**TotalCount** | **number** | 所有行数 | [optional] [default to undefined]
**TotalPage** | **number** | 全部页 | [optional] [default to undefined]
**RequestId** | **string** | 请求id | [optional] [default to 'xxxxx']

## Example

```typescript
import { DescribeTeamIssues200ResponseResponse } from './api';

const instance: DescribeTeamIssues200ResponseResponse = {
    Issues,
    PageNumber,
    PageSize,
    TotalCount,
    TotalPage,
    RequestId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
