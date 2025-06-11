# HostServerGroup

HostServerGroup 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | **string** | 主机组云账号 | [optional] [default to '']
**AgentMachine** | [**AgentMachine**](AgentMachine.md) |  | [optional] [default to undefined]
**DisplayName** | **string** | 主机组名称 | [optional] [default to '']
**Id** | **number** | 主机组 id | [optional] [default to undefined]

## Example

```typescript
import { HostServerGroup } from './api';

const instance: HostServerGroup = {
    Account,
    AgentMachine,
    DisplayName,
    Id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
