# SshKeyInfo

SSH 公钥详细信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreatedAt** | **number** | 创建时间 | [optional] [default to undefined]
**ExpirationDate** | **string** | 过期时间 | [optional] [default to '']
**FingerPrint** | **string** | 指纹信息 | [optional] [default to '']
**HasExpired** | **boolean** | 是否过期 | [optional] [default to false]
**Id** | **number** | 公钥Id | [optional] [default to undefined]
**OwnerId** | **number** | 公钥所属者Id | [optional] [default to undefined]
**Title** | **string** | 公钥标题 | [optional] [default to '']

## Example

```typescript
import { SshKeyInfo } from './api';

const instance: SshKeyInfo = {
    CreatedAt,
    ExpirationDate,
    FingerPrint,
    HasExpired,
    Id,
    OwnerId,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
