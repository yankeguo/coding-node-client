# CreateIterationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Assignee** | **number** | 处理人 ID | [optional] [default to undefined]
**EndAt** | **object** | 结束时间，格式：2020-01-01 | [optional] [default to undefined]
**Goal** | **string** | 目标 | [optional] [default to undefined]
**Name** | **string** | 标题 | [optional] [default to undefined]
**ProjectName** | **string** | 项目名称 | [optional] [default to undefined]
**StartAt** | **object** | 开始时间，格式：2020-01-01 | [optional] [default to undefined]

## Example

```typescript
import { CreateIterationRequest } from './api';

const instance: CreateIterationRequest = {
    Assignee,
    EndAt,
    Goal,
    Name,
    ProjectName,
    StartAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
