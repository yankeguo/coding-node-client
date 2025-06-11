# DescribeIterationListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **Array&lt;number&gt;** | 处理人 ID 列表 | [optional] [default to undefined]
**EndDate** | **object** | 通过结束时间过滤，时间格式：2020-12-12 | [optional] [default to undefined]
**Keywords** | **string** | 通过关键字搜索 | [optional] [default to undefined]
**Limit** | **number** | 每页数量，默认 20 | [optional] [default to undefined]
**Offset** | **number** | 偏移量，默认 0 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**StartDate** | **object** | 通过开始时间过滤，时间格式：2020-12-12 | [optional] [default to undefined]
**Status** | **Array&lt;string&gt;** | 迭代状态,  WAIT_PROCESS,PROCESSING,COMPLETED | [optional] [default to undefined]

## Example

```typescript
import { DescribeIterationListRequest } from './api';

const instance: DescribeIterationListRequest = {
    Assignee,
    EndDate,
    Keywords,
    Limit,
    Offset,
    ProjectName,
    StartDate,
    Status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
