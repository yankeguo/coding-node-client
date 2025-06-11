# DeployKeyInfo

部署公钥信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowWrite** | **boolean** | 是否授予写入权限 | [optional] [default to false]
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**DepotId** | **number** | 仓库 Id | [optional] [default to undefined]
**ExpirationDate** | **string** | 过期时间 | [optional] [default to '']
**FingerPrint** | **string** | key 指纹 | [optional] [default to '']
**HasExpired** | **boolean** | 是否过期 | [optional] [default to false]
**KeyId** | **number** | SSH Key Id | [optional] [default to undefined]
**OwnerName** | **string** | 所属者名字 | [optional] [default to '']
**Title** | **string** | key 标题 | [optional] [default to '']

## Example

```typescript
import { DeployKeyInfo } from './api';

const instance: DeployKeyInfo = {
    AllowWrite,
    CreatedAt,
    DepotId,
    ExpirationDate,
    FingerPrint,
    HasExpired,
    KeyId,
    OwnerName,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
