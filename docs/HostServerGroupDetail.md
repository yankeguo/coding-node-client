# HostServerGroupDetail

HostServerGroupDetail 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Account** | **string** | 主机组云账号 | [optional] [default to '']
**AgentMachine** | [**AgentMachine**](AgentMachine.md) |  | [optional] [default to undefined]
**AuthMethod** | **string** | SSH 认证方式 | [optional] [default to '']
**DisplayName** | **string** | 主机组名称 | [optional] [default to '']
**Id** | **number** | 主机组 id | [optional] [default to undefined]
**Ips** | **Array&lt;string&gt;** | 实例 IP 列表 | [optional] [default to undefined]
**Labels** | [**Array&lt;HostServerGroupLabel&gt;**](HostServerGroupLabel.md) | 主机组标签 | [optional] [default to undefined]
**Port** | **number** | SSH 端口 | [optional] [default to undefined]
**UserName** | **string** | SSH 用户名 | [optional] [default to '']

## Example

```typescript
import { HostServerGroupDetail } from './api';

const instance: HostServerGroupDetail = {
    Account,
    AgentMachine,
    AuthMethod,
    DisplayName,
    Id,
    Ips,
    Labels,
    Port,
    UserName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
