# TeamArtifactPage

团队制品列表分页实体

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InstanceSet** | [**Array&lt;TeamArtifact&gt;**](TeamArtifact.md) | 当前页的版本列表 | [optional] [default to undefined]
**PageNumber** | **number** | 页码 | [optional] [default to undefined]
**PageSize** | **number** | 每页展示数量 | [optional] [default to undefined]
**TotalCount** | **number** | 总数 | [optional] [default to undefined]

## Example

```typescript
import { TeamArtifactPage } from './api';

const instance: TeamArtifactPage = {
    InstanceSet,
    PageNumber,
    PageSize,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
