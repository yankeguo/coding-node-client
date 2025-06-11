# EnabledServiceHookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **boolean** | 是否开启 | [default to undefined]
**Id** | **Array&lt;string&gt;** | Service Hook 编号 | [default to undefined]
**ProjectId** | **number** | 项目或者研发空间编号 | [default to undefined]
**TargetType** | **string** | 目标数据类型：PROJECT,SPACE_NODE,PROGRAM,默认PROJECT | [default to undefined]

## Example

```typescript
import { EnabledServiceHookRequest } from './api';

const instance: EnabledServiceHookRequest = {
    Enabled,
    Id,
    ProjectId,
    TargetType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
