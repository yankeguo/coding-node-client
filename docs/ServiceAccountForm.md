# ServiceAccountForm

ServiceAccountForm 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InsecureSkipTLSVerify** | **boolean** | 是否接受非认证证书（是：true；否：false） | [default to false]
**OnlySpinnakerManaged** | **boolean** | 是否允许持续部署管理集群已有资源（是：false；否：true） | [default to false]
**Secret** | **string** | ServiceAccount 关联的 Secret（YAML 格式，Base64 编码），添加时必填，修改时可不填 | [optional] [default to '']
**Server** | **string** | API Server URL | [default to '']

## Example

```typescript
import { ServiceAccountForm } from './api';

const instance: ServiceAccountForm = {
    InsecureSkipTLSVerify,
    OnlySpinnakerManaged,
    Secret,
    Server,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
