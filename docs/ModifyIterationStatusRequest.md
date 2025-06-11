# ModifyIterationStatusRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EndAt** | **string** | 结束时间，完成迭代必需，格式：2020-01-01 | [optional] [default to undefined]
**IterationCode** | **number** | 迭代编号 | [optional] [default to undefined]
**JoinIterationCode** | **number** | 移入迭代编号 | [optional] [default to undefined]
**Operator** | **string** | 迭代状态操作，类型：start：开始迭代、complete：完成迭代、restart：重新打开 | [optional] [default to undefined]
**ProjectName** | **string** | 项目描述 | [optional] [default to undefined]
**StartAt** | **string** | 开始时间，开始迭代必需，格式：2020-01-01 | [optional] [default to undefined]

## Example

```typescript
import { ModifyIterationStatusRequest } from './api';

const instance: ModifyIterationStatusRequest = {
    EndAt,
    IterationCode,
    JoinIterationCode,
    Operator,
    ProjectName,
    StartAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
