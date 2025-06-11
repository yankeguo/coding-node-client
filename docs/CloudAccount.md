# CloudAccount

CloudAccount 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudProvider** | **string** | 云账号类型 | [optional] [default to '']
**Credential** | [**CloudAccountCredential**](CloudAccountCredential.md) |  | [optional] [default to undefined]
**ErrorMessage** | **string** | 云账号状态错误信息 | [optional] [default to '']
**Id** | **number** | 云账号 ID | [optional] [default to undefined]
**Name** | **string** | 云账号名称 | [optional] [default to '']
**Status** | **string** | 云账号状态 | [optional] [default to '']

## Example

```typescript
import { CloudAccount } from './api';

const instance: CloudAccount = {
    CloudProvider,
    Credential,
    ErrorMessage,
    Id,
    Name,
    Status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
