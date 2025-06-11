# CdDeployOpenApiHostServerInstance

主机组部署详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **string** | 部署状态 succeed:成功 failed:失败 running:运行中 | [default to '']
**HumanReadableName** | **string** | 主机IP | [default to '']
**Account** | **string** | 部署账号 | [default to '']
**DeployedTime** | **number** | 部署时间 | [default to 0]
**Zone** | **string** | 主机组名称 | [default to '']
**CloudProvider** | **string** | 云主机类型 主机组部署默认为 hostserver | [default to 'hostserver']
**Ip** | **string** | 主机IP | [default to '']
**Region** | **string** | 主机组名称 | [default to '']
**ProviderType** | **string** | 云主机类型 主机组部署默认为 hostserver | [default to 'hostserver']
**Name** | **string** | 该主机部署主键 | [default to '']

## Example

```typescript
import { CdDeployOpenApiHostServerInstance } from './api';

const instance: CdDeployOpenApiHostServerInstance = {
    Status,
    HumanReadableName,
    Account,
    DeployedTime,
    Zone,
    CloudProvider,
    Ip,
    Region,
    ProviderType,
    Name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
