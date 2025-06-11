# DescribePoliciesOnResourceTypeRequestFilter

获取指定资源类型对应的权限组列表的查询条件

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PolicyAlias** | **string** | 权限组显示名称，模糊匹配 | [optional] [default to '']
**ResourceType** | **string** | 资源类型，精确匹配 | [default to '']
**Visible** | **string** | 可见范围（默认 true），all：全部；true：用户可见；false：界面不可见（逻辑权限组） | [optional] [default to '']

## Example

```typescript
import { DescribePoliciesOnResourceTypeRequestFilter } from './api';

const instance: DescribePoliciesOnResourceTypeRequestFilter = {
    PolicyAlias,
    ResourceType,
    Visible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
