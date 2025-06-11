# DescribeAllProjectsIssueWorkLogListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **number** | 结束时间 | [optional] [default to undefined]
**Limit** | **number** | 每页数量，默认 20，最大1000 | [optional] [default to undefined]
**Offset** | **number** | 偏移量，默认 0 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**StartAt** | **number** | 开始时间 | [optional] [default to undefined]
**UserId** | **number** | 用户 ID | [optional] [default to undefined]

## Example

```typescript
import { DescribeAllProjectsIssueWorkLogListRequest } from './api';

const instance: DescribeAllProjectsIssueWorkLogListRequest = {
    EndAt,
    Limit,
    Offset,
    ProjectName,
    StartAt,
    UserId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
