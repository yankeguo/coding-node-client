# CreateIssueWorkHoursRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IssueCode** | **number** | 事项 Code | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**RemainingHour** | **number** | 剩余工时 | [optional] [default to undefined]
**SpendHour** | **number** | 使用工时 | [optional] [default to undefined]
**StartAt** | **number** | 开始时间戳 | [optional] [default to undefined]
**WorkingDesc** | **string** | 工作描述 | [optional] [default to undefined]

## Example

```typescript
import { CreateIssueWorkHoursRequest } from './api';

const instance: CreateIssueWorkHoursRequest = {
    IssueCode,
    ProjectName,
    RemainingHour,
    SpendHour,
    StartAt,
    WorkingDesc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
