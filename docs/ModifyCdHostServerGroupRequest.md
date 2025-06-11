# ModifyCdHostServerGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentMachineId** | **number** | 堡垒机 ID | [default to undefined]
**AuthMethod** | **string** | SSH 认证方式（可选值：PUBLIC_KEY、PASSWORD） | [default to undefined]
**DisplayName** | **string** | 主机组名称 | [default to undefined]
**Id** | **number** | 主机组 ID | [default to undefined]
**Ips** | **Array&lt;string&gt;** | 实例 IP 列表 | [default to undefined]
**Labels** | [**Array&lt;HostServerGroupLabel&gt;**](HostServerGroupLabel.md) | 主机组标签 | [optional] [default to undefined]
**Password** | **string** | SSH 密码 | [optional] [default to undefined]
**Port** | **number** | SSH 端口 | [default to undefined]
**UserName** | **string** | SSH 用户名 | [default to undefined]

## Example

```typescript
import { ModifyCdHostServerGroupRequest } from './api';

const instance: ModifyCdHostServerGroupRequest = {
    AgentMachineId,
    AuthMethod,
    DisplayName,
    Id,
    Ips,
    Labels,
    Password,
    Port,
    UserName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
