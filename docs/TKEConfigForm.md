# TKEConfigForm

TKEConfigForm 结构

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClusterId** | **string** | TKE 集群 ID | [default to '']
**Namespaces** | **Array&lt;string&gt;** | 将为选择的每个命名空间自动生成用于访问 CODING Docker 仓库的凭据（ImagePullSecrets） | [optional] [default to undefined]
**OnlySpinnakerManaged** | **boolean** | 是否允许持续部署管理集群已有资源（是：false；否：true） | [default to false]
**Region** | **string** | TKE 地域 | [default to '']

## Example

```typescript
import { TKEConfigForm } from './api';

const instance: TKEConfigForm = {
    ClusterId,
    Namespaces,
    OnlySpinnakerManaged,
    Region,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
