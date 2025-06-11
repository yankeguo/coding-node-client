# IssueStatusChangeLog

事项状态修改日志结构体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**IssueCode** | **number** | 事项code | [optional] [default to undefined]
**IssueStatus** | [**IssueStatus**](IssueStatus.md) |  | [optional] [default to undefined]
**StatusId** | **number** | 状态ID | [optional] [default to undefined]
**StatusName** | **string** | 事项章台名称 | [optional] [default to '']

## Example

```typescript
import { IssueStatusChangeLog } from './api';

const instance: IssueStatusChangeLog = {
    CreatedAt,
    IssueCode,
    IssueStatus,
    StatusId,
    StatusName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
