# IssueWorkLog

事项工时日志信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间戳 | [optional] [default to undefined]
**Id** | **number** | 工时日志 Id | [optional] [default to undefined]
**IssueCode** | **number** | 事项编号 | [optional] [default to undefined]
**IssueId** | **number** | 事项 Id | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to '']
**RecordHours** | **number** | 使用工时 | [optional] [default to undefined]
**RemainingHours** | **number** | 剩余工时 | [optional] [default to undefined]
**StartAt** | **number** | 开始时间 | [optional] [default to undefined]
**UpdatedAt** | **number** | 更新时间 | [optional] [default to undefined]
**UserId** | **number** | 用户 Id | [optional] [default to undefined]
**WorkingDesc** | **string** | 工作描述 | [optional] [default to '']

## Example

```typescript
import { IssueWorkLog } from './api';

const instance: IssueWorkLog = {
    CreatedAt,
    Id,
    IssueCode,
    IssueId,
    ProjectName,
    RecordHours,
    RemainingHours,
    StartAt,
    UpdatedAt,
    UserId,
    WorkingDesc,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
