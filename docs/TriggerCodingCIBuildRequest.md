# TriggerCodingCIBuildRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **number** | 构建计划 Id | [default to undefined]
**ParamList** | [**Array&lt;CodingCIJobEnv&gt;**](CodingCIJobEnv.md) | 构建附加的环境变量 | [optional] [default to undefined]
**Reentrant** | **string** | 可重入字符串 | [optional] [default to undefined]
**Revision** | **string** | 分支名或 CommitId，当为构建计划的 DepotType 为 NONE 是可不传 | [optional] [default to undefined]

## Example

```typescript
import { TriggerCodingCIBuildRequest } from './api';

const instance: TriggerCodingCIBuildRequest = {
    JobId,
    ParamList,
    Reentrant,
    Revision,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
