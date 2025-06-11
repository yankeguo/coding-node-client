# ProjectIssueStatus

项目的事项状态

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**IsDefault** | **boolean** | 是否是默认值 | [optional] [default to false]
**IssueStatus** | [**IssueStatus**](IssueStatus.md) |  | [optional] [default to undefined]
**IssueStatusId** | **number** | 事项状态 ID | [optional] [default to undefined]
**IssueType** | **string** | 事项类型 | [optional] [default to '']
**Sort** | **number** | 排序 | [optional] [default to undefined]
**UpdatedAt** | **number** | 修改时间戳 | [optional] [default to undefined]

## Example

```typescript
import { ProjectIssueStatus } from './api';

const instance: ProjectIssueStatus = {
    CreatedAt,
    IsDefault,
    IssueStatus,
    IssueStatusId,
    IssueType,
    Sort,
    UpdatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
