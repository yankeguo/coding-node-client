# DescribeReleaseListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Conditions** | [**Array&lt;IssueCondition&gt;**](IssueCondition.md) | 筛选条件列表，每一个值都是一个筛选条件，条件取值可以参考页面上的对应的HTTP接口  | [optional] [default to undefined]
**Page** | **number** | 分页查询中的页数，page从1开始计数  | [optional] [default to undefined]
**PageSize** | **number** | 分页查询中每页的大小  | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**SortKey** | **string** | 排序KEY  | [optional] [default to undefined]
**SortValue** | **string** | 排序VALUE  | [optional] [default to undefined]

## Example

```typescript
import { DescribeReleaseListRequest } from './api';

const instance: DescribeReleaseListRequest = {
    Conditions,
    Page,
    PageSize,
    ProjectName,
    SortKey,
    SortValue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
