# CreateCdCloudAccountRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CloudProvider** | **string** | 云账号类型（可选值：KUBERNETES、TENCENT） | [optional] [default to undefined]
**Credential** | [**CloudAccountCredential**](CloudAccountCredential.md) |  | [optional] [default to undefined]
**Name** | **string** | 云账号名称 | [optional] [default to undefined]

## Example

```typescript
import { CreateCdCloudAccountRequest } from './api';

const instance: CreateCdCloudAccountRequest = {
    CloudProvider,
    Credential,
    Name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
