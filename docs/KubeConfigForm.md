# KubeConfigForm

KubeConfigForm 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClusterContext** | **string** | 指定访问集群 KubeConfig 文件的上下文 | [default to '']
**InsecureSkipTLSVerify** | **boolean** | 是否接受非认证证书（是：true；否：false） | [default to false]
**KubeConfig** | **string** | 访问集群的 KubeConfig 文件（YAML 格式，Base64 编码），添加时必填，修改时可不填 | [optional] [default to '']
**OnlySpinnakerManaged** | **boolean** | 是否允许持续部署管理集群已有资源（是：false；否：true） | [default to false]

## Example

```typescript
import { KubeConfigForm } from './api';

const instance: KubeConfigForm = {
    ClusterContext,
    InsecureSkipTLSVerify,
    KubeConfig,
    OnlySpinnakerManaged,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
