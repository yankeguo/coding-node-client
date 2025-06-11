# PingServiceHookRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Array&lt;string&gt;** | Service Hook 编号 | [optional] [default to undefined]
**ProjectId** | **number** | 项目编号或者研发空间标号 | [optional] [default to undefined]
**TargetType** | **string** | 目标数据类型：PROJECT,SPACE_NODE,PROGRAM,默认PROJECT | [optional] [default to undefined]

## Example

```typescript
import { PingServiceHookRequest } from './api';

const instance: PingServiceHookRequest = {
    Id,
    ProjectId,
    TargetType,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
