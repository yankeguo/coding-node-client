# DescribeReleaseIssueListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignees** | **Array&lt;number&gt;** | 处理人ID数组 | [optional] [default to undefined]
**IssueTypeIds** | **Array&lt;number&gt;** | 事项类型ID数组  | [optional] [default to undefined]
**IssueTypes** | **Array&lt;string&gt;** | 事项类型数组 | [optional] [default to undefined]
**Keywords** | **string** | 关键字 | [optional] [default to undefined]
**Page** | **number** | 分页查询中的页数,page从1开始计数  | [optional] [default to undefined]
**PageSize** | **number** | 分页查询中每页的大小  | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**ReleaseCode** | **number** | 页面上版本ID | [optional] [default to undefined]
**ShowImageOutUrl** | **boolean** | 是否展示描述中外部可访问的地址 | [optional] [default to undefined]
**ShowSubIssues** | **boolean** | 是否显示字事项，和页面开关对应  | [optional] [default to undefined]
**SortBy** | **string** | 排序，取值如\&quot;ID:ASC\&quot;  | [optional] [default to undefined]
**StatusTypes** | **Array&lt;number&gt;** | 事项状态类型数组  | [optional] [default to undefined]
**Watchers** | **Array&lt;number&gt;** | 关注人ID数组  | [optional] [default to undefined]

## Example

```typescript
import { DescribeReleaseIssueListRequest } from './api';

const instance: DescribeReleaseIssueListRequest = {
    Assignees,
    IssueTypeIds,
    IssueTypes,
    Keywords,
    Page,
    PageSize,
    ProjectName,
    ReleaseCode,
    ShowImageOutUrl,
    ShowSubIssues,
    SortBy,
    StatusTypes,
    Watchers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
