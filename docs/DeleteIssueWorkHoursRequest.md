# DeleteIssueWorkHoursRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssueCode** | **number** | 事项 Code | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**RollbackRemainingHours** | **boolean** | 是否将该工时日志的使用工时归还到剩余工时，默认：false | [optional] [default to undefined]
**WorkHourLogId** | **number** | 工时日志 Id | [optional] [default to undefined]

## Example

```typescript
import { DeleteIssueWorkHoursRequest } from './api';

const instance: DeleteIssueWorkHoursRequest = {
    IssueCode,
    ProjectName,
    RollbackRemainingHours,
    WorkHourLogId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
