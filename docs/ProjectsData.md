# ProjectsData

查询团队内所有项目

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PageNumber** | **number** | 第几页 | [optional] [default to undefined]
**PageSize** | **number** | 每页条数 | [optional] [default to undefined]
**ProjectList** | [**Array&lt;Project&gt;**](Project.md) | 项目集合 | [optional] [default to undefined]
**TotalCount** | **number** | 总条数 | [optional] [default to undefined]

## Example

```typescript
import { ProjectsData } from './api';

const instance: ProjectsData = {
    PageNumber,
    PageSize,
    ProjectList,
    TotalCount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
