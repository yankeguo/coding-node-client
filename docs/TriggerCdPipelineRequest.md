# TriggerCdPipelineRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Application** | **string** | CD 应用名 | [optional] [default to undefined]
**PipelineNameOrId** | **string** | 部署流程名称或 ID | [optional] [default to undefined]
**TriggerJsonContent** | **string** | 触发参数 JSON 配置 | [optional] [default to undefined]

## Example

```typescript
import { TriggerCdPipelineRequest } from './api';

const instance: TriggerCdPipelineRequest = {
    Application,
    PipelineNameOrId,
    TriggerJsonContent,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
