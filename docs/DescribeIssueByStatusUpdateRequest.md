# DescribeIssueByStatusUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProjectName** | **string** | 项目名称 | [default to undefined]
**ShowImageOutUrl** | **boolean** | 是否展示事项描述中对外的路径 | [optional] [default to undefined]
**Status** | **string** | 修改之后的状态 | [default to undefined]
**UpdatedAt** | **string** | 状态更新时间 | [default to undefined]

## Example

```typescript
import { DescribeIssueByStatusUpdateRequest } from './api';

const instance: DescribeIssueByStatusUpdateRequest = {
    ProjectName,
    ShowImageOutUrl,
    Status,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
