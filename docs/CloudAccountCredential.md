# CloudAccountCredential

CloudAccountCredential 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KubeConfig** | [**KubeConfigForm**](KubeConfigForm.md) |  | [optional] [default to undefined]
**KubernetesType** | **string** | KUBERNETES 类型云账号认证方式（可选值：KUBE_CONFIG、SERVICE_ACCOUNT、TKE），TENCENT 类型云账号可不填 | [optional] [default to '']
**ServiceAccount** | [**ServiceAccountForm**](ServiceAccountForm.md) |  | [optional] [default to undefined]
**TKEConfig** | [**TKEConfigForm**](TKEConfigForm.md) |  | [optional] [default to undefined]
**TencentCloudAccount** | [**TencentCloudAccountForm**](TencentCloudAccountForm.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CloudAccountCredential } from './api';

const instance: CloudAccountCredential = {
    KubeConfig,
    KubernetesType,
    ServiceAccount,
    TKEConfig,
    TencentCloudAccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
